namespace Model.Entity
{
    public class Order
    {
        public int Id { get; set; } 
        public DateTime Date { get; set; } 
        public string Status { get; set; } 
        public decimal Price { get; set; } 
        
        public int IdCart { get; set; }
        public Cart Cart { get; set; }
        
        public int IdUser { get; set; }
        public User User { get; set; }
    }
}
