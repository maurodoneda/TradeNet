using System;

namespace Domain{

    public class Trade{
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Asset { get; set; }
        public DateTime Date { get; set; }
        public string Market { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfDislikes { get; set; }
    
    }



}
