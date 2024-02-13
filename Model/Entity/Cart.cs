namespace Model.Entity
{
    public class Cart
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        
        public List<Add>? Adds { get; set; }
    }
}
