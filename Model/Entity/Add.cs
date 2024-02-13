namespace Model.Entity
{
    public class Add
    {
        public int Id { get; set; } 
        
        public int IdItem { get; set; }
        public Item Item { get; set; }
        
        public int IdCart { get; set; }
        public Cart Cart { get; set; }
        
        public int QuantityItem { get; set; } 
    }
}

