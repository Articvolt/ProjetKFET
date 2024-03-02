using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Entity;

namespace Project.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AddsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Adds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Add>>> GetAdds()
        {
            return await _context.Adds.Include(a => a.Item).Include(a => a.Cart).ToListAsync();
        }

        // GET: api/Adds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Add>> GetAdd(int id)
        {
            var add = await _context.Adds.Include(a => a.Item).Include(a => a.Cart).FirstOrDefaultAsync(a => a.Id == id);

            if (add == null)
            {
                return NotFound();
            }

            return add;
        }

        // POST: api/Adds
        [HttpPost]
        public async Task<ActionResult<Add>> PostAdd(Add add)
        {
            _context.Adds.Add(add);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAdd), new { id = add.Id }, add);
        }

        // PUT: api/Adds/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdd(int id, Add add)
        {
            if (id != add.Id)
            {
                return BadRequest();
            }

            _context.Entry(add).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Adds.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Adds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdd(int id)
        {
            var add = await _context.Adds.FindAsync(id);
            if (add == null)
            {
                return NotFound();
            }

            _context.Adds.Remove(add);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
