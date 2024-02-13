namespace Model.Entity
{
    public class Category
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public ICollection<Item>? Items { get; set; }
    }
}
