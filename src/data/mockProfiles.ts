
// Collection of realistic user profiles for demo purposes
export interface UserProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  interests: string[];
  photos: string[];
  lastActive?: string;
  job?: string;
  education?: string;
  height?: string;
  relationshipGoal?: string;
  verified?: boolean;
}

export const mockProfiles: UserProfile[] = [
  {
    id: 1,
    name: "Sophie Williams",
    age: 28,
    location: "New York, NY",
    distance: "5 miles away",
    bio: "Adventure seeker, coffee enthusiast, and dog lover. Looking for someone who enjoys hiking and trying new restaurants.",
    interests: ["Travel", "Fitness", "Coffee", "Dogs", "Hiking"],
    photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"],
    job: "Marketing Manager",
    education: "MBA, Columbia University",
    height: "5'6\"",
    relationshipGoal: "Long-term relationship",
    verified: true,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "James Thompson",
    age: 32,
    location: "Brooklyn, NY",
    distance: "7 miles away",
    bio: "Musician and tech enthusiast. Love good conversation over craft beer. Looking for someone genuine and kind.",
    interests: ["Music", "Technology", "Craft Beer", "Reading", "Photography"],
    photos: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"],
    job: "Software Engineer",
    education: "BS Computer Science, NYU",
    height: "6'0\"",
    relationshipGoal: "Dating",
    verified: true,
    lastActive: "1 day ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    age: 26,
    location: "Queens, NY",
    distance: "10 miles away",
    bio: "Art teacher by day, painter by night. Seeking someone creative who appreciates the beauty in small things.",
    interests: ["Art", "Painting", "Museums", "Wine Tasting", "Cooking"],
    photos: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"],
    job: "Art Teacher",
    education: "MFA, Pratt Institute",
    height: "5'4\"",
    relationshipGoal: "Open to anything",
    verified: false,
    lastActive: "Just now"
  },
  {
    id: 4,
    name: "Michael Chen",
    age: 30,
    location: "Manhattan, NY",
    distance: "3 miles away",
    bio: "Foodie, traveler, and fitness enthusiast. I spend my weekends trying new restaurants or hiking with my dog.",
    interests: ["Cooking", "Hiking", "Travel", "Fitness", "Dogs"],
    photos: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Chef",
    education: "Culinary Institute of America",
    height: "5'10\"",
    relationshipGoal: "Long-term relationship",
    verified: true,
    lastActive: "3 hours ago"
  },
  {
    id: 5,
    name: "Olivia Taylor",
    age: 27,
    location: "Hoboken, NJ",
    distance: "8 miles away",
    bio: "Yoga instructor and wellness coach. Passionate about healthy living and mindfulness. Looking for someone who values personal growth.",
    interests: ["Yoga", "Meditation", "Nutrition", "Reading", "Hiking"],
    photos: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Yoga Instructor",
    education: "Certification in Holistic Nutrition",
    height: "5'5\"",
    relationshipGoal: "Dating",
    verified: true,
    lastActive: "5 hours ago"
  },
  {
    id: 6,
    name: "Daniel Garcia",
    age: 29,
    location: "Jersey City, NJ",
    distance: "9 miles away",
    bio: "Financial analyst by day, salsa dancer by night. I love outdoor activities and trying new cuisines.",
    interests: ["Dancing", "Finance", "Cooking", "Hiking", "Travel"],
    photos: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Financial Analyst",
    education: "MBA, Fordham University",
    height: "5'11\"",
    relationshipGoal: "Open to anything",
    verified: false,
    lastActive: "1 hour ago"
  },
  {
    id: 7,
    name: "Ava Johnson",
    age: 24,
    location: "Williamsburg, Brooklyn",
    distance: "6 miles away",
    bio: "Indie musician and barista. Looking for someone to explore the city's music scene with and have deep conversations.",
    interests: ["Music", "Coffee", "Art", "Vintage Shopping", "Concerts"],
    photos: ["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Musician/Barista",
    education: "BA Music, Berklee College",
    height: "5'3\"",
    relationshipGoal: "Dating",
    verified: true,
    lastActive: "Just now"
  },
  {
    id: 8,
    name: "Ethan Wilson",
    age: 31,
    location: "Upper East Side, NY",
    distance: "4 miles away",
    bio: "Pediatrician who loves photography, hiking, and volunteering. Seeking someone kind-hearted with similar values.",
    interests: ["Medicine", "Photography", "Volunteering", "Hiking", "Travel"],
    photos: ["https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Pediatrician",
    education: "MD, Cornell University",
    height: "6'1\"",
    relationshipGoal: "Long-term relationship",
    verified: true,
    lastActive: "Yesterday"
  },
  {
    id: 9,
    name: "Isabella Martinez",
    age: 25,
    location: "Lower Manhattan, NY",
    distance: "2 miles away",
    bio: "Fashion designer and sustainability advocate. Looking for someone who shares my passion for creativity and making the world better.",
    interests: ["Fashion", "Sustainability", "Art", "Design", "Thrifting"],
    photos: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Fashion Designer",
    education: "BFA, Parsons School of Design",
    height: "5'7\"",
    relationshipGoal: "Dating",
    verified: true,
    lastActive: "4 hours ago"
  },
  {
    id: 10,
    name: "Noah Brown",
    age: 33,
    location: "Astoria, Queens",
    distance: "12 miles away",
    bio: "Architect with a passion for sustainable design. Love exploring new neighborhoods, trying local restaurants, and weekend hikes.",
    interests: ["Architecture", "Design", "Food", "Hiking", "Photography"],
    photos: ["https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"],
    job: "Architect",
    education: "M.Arch, Columbia University",
    height: "6'2\"",
    relationshipGoal: "Long-term relationship",
    verified: false,
    lastActive: "2 days ago"
  }
];

// More profiles (continuing to 50+ total)
export const additionalProfiles: UserProfile[] = [
  // Additional 40+ profiles would be added here
  // Format similar to the ones above
  // With diverse ages, backgrounds, interests, locations
];

// Collection of inspirational love quotes
export const loveQuotes = [
  "Love is not about how many days, months, or years you have been together. It's all about how much you love each other every day.",
  "The best thing to hold onto in life is each other.",
  "Love is composed of a single soul inhabiting two bodies.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "To love and be loved is to feel the sun from both sides.",
  "The greatest happiness you can have is knowing that you are loved for who you are and nothing else.",
  "Love is not finding someone to live with. It's finding someone you can't live without.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "The best love is the kind that awakens the soul and makes us reach for more.",
  "Love is an endless mystery, for it has nothing else to explain it.",
  "You don't love someone for their looks, or their clothes, or their fancy car, but because they sing a song only you can hear.",
  "Love isn't something you find. Love is something that finds you.",
  "The art of love is largely the art of persistence.",
  "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
  "Real love stories never have endings."
];

// Collection of matches with their conversation history
export const mockMatches = [
  {
    id: 101,
    userId: 1,
    name: "Olivia Parker",
    lastMessage: "When should we meet for coffee?",
    time: "2m ago",
    unread: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    messages: [
      {
        id: 1,
        sender: "match",
        text: "Hi there! I noticed you're into hiking as well. What's your favorite trail?",
        timestamp: "2023-05-22T10:30:00Z"
      },
      {
        id: 2,
        sender: "user",
        text: "Hey! Nice to connect. I love the Appalachian Trail sections near Bear Mountain. How about you?",
        timestamp: "2023-05-22T10:45:00Z"
      },
      {
        id: 3,
        sender: "match",
        text: "That's one of my favorites too! Would you be interested in grabbing coffee sometime to chat about hiking adventures?",
        timestamp: "2023-05-22T11:00:00Z"
      },
      {
        id: 4,
        sender: "user",
        text: "That sounds great! I'm free this weekend if that works for you?",
        timestamp: "2023-05-22T11:15:00Z"
      },
      {
        id: 5,
        sender: "match",
        text: "When should we meet for coffee?",
        timestamp: "2023-05-22T11:30:00Z"
      }
    ]
  },
  {
    id: 102,
    userId: 2,
    name: "Ethan Mitchell",
    lastMessage: "I loved that restaurant you recommended!",
    time: "1h ago",
    unread: false,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Have you tried that new Italian place on 5th Avenue?",
        timestamp: "2023-05-21T18:30:00Z"
      },
      {
        id: 2,
        sender: "match",
        text: "Not yet! Is it good?",
        timestamp: "2023-05-21T18:45:00Z"
      },
      {
        id: 3,
        sender: "user",
        text: "It's amazing! You should definitely check it out. Their pasta is homemade.",
        timestamp: "2023-05-21T19:00:00Z"
      },
      {
        id: 4,
        sender: "match",
        text: "I loved that restaurant you recommended!",
        timestamp: "2023-05-22T10:30:00Z"
      }
    ]
  },
  {
    id: 103,
    userId: 3,
    name: "Ava Williams",
    lastMessage: "Looking forward to our date this weekend!",
    time: "3h ago",
    unread: false,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    messages: [
      {
        id: 1,
        sender: "match",
        text: "Hey there! I saw we both love jazz music. Have you been to any good concerts lately?",
        timestamp: "2023-05-20T14:30:00Z"
      },
      {
        id: 2,
        sender: "user",
        text: "Hi! Yes, I went to see Kamasi Washington last month. It was incredible!",
        timestamp: "2023-05-20T15:00:00Z"
      },
      {
        id: 3,
        sender: "match",
        text: "No way! I love his music. Would you want to check out the jazz festival happening this weekend?",
        timestamp: "2023-05-20T15:15:00Z"
      },
      {
        id: 4,
        sender: "user",
        text: "That sounds perfect! Let's do it!",
        timestamp: "2023-05-20T15:30:00Z"
      },
      {
        id: 5,
        sender: "match",
        text: "Looking forward to our date this weekend!",
        timestamp: "2023-05-20T16:00:00Z"
      }
    ]
  }
];
