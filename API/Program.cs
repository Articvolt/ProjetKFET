using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Model;
using Model.Entity;
using Swashbuckle.AspNetCore.Filters;

// Crée un nouveau WebApplicationBuilder pour configurer l'application.
var builder = WebApplication.CreateBuilder(args);

// Récupère la chaîne de connexion à partir des configurations de l'application.
// Si la chaîne de connexion n'est pas trouvée, une exception est lancée.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                       ?? throw new InvalidOperationException("connection string 'defaultconnection' not found.");

// Ajoute un DbContext à l'injection de dépendances avec la chaîne de connexion MySQL.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Configure Identity pour utiliser l'API avec des points de terminaison spécifiques à l'API.
builder.Services.AddIdentityApiEndpoints<User>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

// Configure les contrôleurs pour utiliser les options JSON spécifiques.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    // Ignore les cycles de référence lors de la sérialisation JSON.
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
});

// Ajoute le support pour l'exploration des points de terminaison API avec Swagger/OpenAPI.
builder.Services.AddEndpointsApiExplorer();

// Configure Swagger/OpenAPI pour générer des documents d'API.
builder.Services.AddSwaggerGen(options =>
{
    // Ajoute une définition de sécurité OAuth2 pour Swagger.
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    // Ajoute un filtre d'opération pour appliquer les exigences de sécurité.
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});

// Configure CORS pour permettre des requêtes spécifiques.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("https://localhost:5173", "http://localhost:5173") 
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

// Construit l'application à partir du builder.
var app = builder.Build();

// Utilise les fichiers par défaut et les fichiers statiques.
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure le pipeline de requêtes HTTP.
if (app.Environment.IsDevelopment())
{
    // Utilise Swagger et Swagger UI en mode développement.
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Configure Identity pour utiliser les points de terminaison d'API.
app.MapIdentityApi<User>();

// Redirige toutes les requêtes HTTP vers HTTPS.
app.UseHttpsRedirection();

// Applique la politique CORS configurée.
app.UseCors("AllowSpecificOrigin");

// Active l'autorisation.
app.UseAuthorization();

// Configure les contrôleurs pour gérer les requêtes.
app.MapControllers();

// Redirige toutes les autres requêtes vers un fichier spécifique.
app.MapFallbackToFile("/index.html");

// Exécute l'application.
app.Run();
