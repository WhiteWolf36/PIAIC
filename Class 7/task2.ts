interface Author {
  name: String;
  id: Number;
  bio: String;
}

type Comment_ = {
  author: Author;
  content: String;
  timestamp: Number;
};

interface Post {
  id: Number;
  title: String;
  content: String;
  author: Author;
  comments: Comment_[];
}

const author: Author = {
  name: "Ahmad",
  id: 1,
  bio: "I am a developer",
};

const comments: Comment_[] = [
  {
    author: author,
    content: "That's great!",
    timestamp: Date.now(),
  },
  {
    author: author,
    content: "That's lovely!",
    timestamp: Date.now(),
  },
  {
    author: author,
    content: "Awesome!",
    timestamp: Date.now(),
  },
];

const post: Post = {
  id: 1,
  title: "Developer",
  content: "This is the first blog",
  author: author,
  comments: comments,
};
