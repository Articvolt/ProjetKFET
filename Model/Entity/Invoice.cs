namespace Model.Entity
{
    public class Invoice
    {
        public int Id { get; set; } 
        public DateTime Date { get; set; } 
        public bool Status { get; set; } 
        public decimal TotalPrice { get; set; } 
        
        public int IdOrder { get; set; } 
        public Order? Order { get; set; }
    }
}