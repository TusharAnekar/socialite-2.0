import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "11",
    content:
      "Day 1 of #100DaysOfCode ✅ES6 assignment done. ✅Peer Programming done. ✅Learned about inputs in React",
    mediaURL: "",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tusharanekar",
    comments: [
      {
        id: 1,
        comment: "All the best on your coding journey.",
        commentLikeCount: 5,
        username: "jayeshraghuwanshi",
      },
      {
        id: 2,
        comment: "Good start. Make sure you finish good.",
        commentLikeCount: 8,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2022-09-12T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "12",
    content:
      "Finally, better late than never. Completed my first React e-commerce web app dedicated to books! Kindly spread the word. Feedback & suggestions are highly appreciated!.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/video/upload/v1691218907/Book_Nook_eot4kn.mp4",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tusharanekar",
    comments: [
      {
        id: 1,
        comment: "Good project. It is way better than my first React project.",
        commentLikeCount: 6,
        username: "jayeshraghuwanshi",
      },
      {
        id: 2,
        comment: "Gajab bhai.",
        commentLikeCount: 10,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2022-09-10T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "13",
    content: "I am loving Seattle it is such a beautiful place to live.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691126636/samples/landscapes/nature-mountains.jpg",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jayeshraghuwanshi",
    comments: [
      {
        id: 1,
        comment: "Great view. Upload some more pics of the trip.",
        commentLikeCount: 9,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Time for ZNMD like trip.",
        commentLikeCount: 3,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2022-09-11T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "14",
    content:
      "I have learned the best things at Cognizant and Tushar Anekar is the best person that I know.",
    mediaURL: "",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jayeshraghuwanshi",
    comments: [
      {
        id: 1,
        comment: "Indeed. It was great time in Cognizant.",
        commentLikeCount: 2,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Tushar Anekar is really the best.",
        commentLikeCount: 11,
        username: "prasadjamdade",
      },
    ],
    createdAt: "2022-08-12T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "15",
    content: "I am named after this cricketing legend.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691220198/e16c3f75ffa72c645e030419e29871ab_fxualw.jpg",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sachinpachpute",
    comments: [
      {
        id: 1,
        comment: "The GOAT.",
        commentLikeCount: 20,
        username: "jayeshraghuwanshi",
      },
      {
        id: 2,
        comment: "Cover drive the best shot in the cricket to watch.",
        commentLikeCount: 16,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2022-08-19T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "16",
    content:
      "I love working at Godrej it is a reputated company and has a great work culture.",
    mediaURL: "",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sachinpachpute",
    comments: [
      {
        id: 1,
        comment: "I am looking for a job can you refer me.",
        commentLikeCount: 2,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Godrej have built a empire.",
        commentLikeCount: 18,
        username: "prasadjamdade",
      },
    ],
    createdAt: "2022-09-15T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "17",
    content: "Elephants are such a majectic animals.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/video/upload/v1691126644/samples/elephants.mp4",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sudhanshushiwarkar",
    comments: [
      {
        id: 1,
        comment: "Elephants are just beautiful.",
        commentLikeCount: 26,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Ganpati bappa morya.",
        commentLikeCount: 18,
        username: "prasadjamdade",
      },
    ],
    createdAt: "2023-08-12T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "18",
    content: "Music can be a best medicine if you devote to lyrics and notes.",
    mediaURL: "",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sudhanshushiwarkar",
    comments: [
      {
        id: 1,
        comment: "Music can make you cry and smile.",
        commentLikeCount: 28,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Most importantly it makes you fall in love.",
        commentLikeCount: 18,
        username: "jayeshraghuwanshi",
      },
    ],
    createdAt: "2023-08-11T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "19",
    content: "Shoes are overated in western countries.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691126651/samples/shoe.jpg",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prasadjamdade",
    comments: [
      {
        id: 1,
        comment: "However expensive, shoes need to be wore in feet not head.",
        commentLikeCount: 48,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "Need some advice, going to buy some food.",
        commentLikeCount: 18,
        username: "jayeshraghuwanshi",
      },
    ],
    createdAt: "2022-10-12T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "20",
    content:
      "Testing is a game of patience and critical thinking. There is a reason it is called Quality Assurance.",
    mediaURL: "",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prasadjamdade",
    comments: [
      {
        id: 1,
        comment: "Hats off to QA team.",
        commentLikeCount: 29,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment:
          "Quality free projects are the benchmark and testers are the backbone of it.",
        commentLikeCount: 1,
        username: "jayeshraghuwanshi",
      },
    ],
    createdAt: "2023-01-12T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "21",
    content:
      "Playing for the national team is the greatest honour a footballer can have.",
    mediaURL:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691222494/Untitled-design-95_onavpf.jpg",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sunilchhetri",
    comments: [
      {
        id: 1,
        comment: "Football the best sport in the world.",
        commentLikeCount: 9,
        username: "tusharanekar",
      },
      {
        id: 2,
        comment: "You are my idol.",
        commentLikeCount: 11,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2023-02-15T15:52:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "22",
    content:
      "I play for Bengaluru FC but I have a special place in my heart for Mumbai City FC.",
    mediaURL: "",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sunilchhetri",
    comments: [
      {
        id: 1,
        comment: "You are fondly remembered at Mumbai.",
        commentLikeCount: 90,
        username: "jayeshraghuwanshi",
      },
      {
        id: 2,
        comment: "The best number 11 in India.",
        commentLikeCount: 11,
        username: "sudhanshushiwarkar",
      },
    ],
    createdAt: "2023-06-14T15:52:00+05:30",
    updatedAt: formatDate(),
  },
];
