import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Tushar",
    lastName: "Anekar",
    username: "tusharanekar",
    password: "tusharanekar123",
    bio: "Aspiring Web Developer | Learning at @neogcamp2023 | Football ⚽ my sport | Continue learning continue evolving.",
    website: "https://tusharanekarportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691147428/ICVH0M-A_400x400_rqit2p.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 2,
        firstName: "Jayesh",
        lastName: "Raghuwanshi",
        username: "jayeshraghuwanshi",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691132281/srX1jS6k_400x400_igwc48.jpg",
      },
    ],
    followers: [
      {
        _id: 2,
        firstName: "Jayesh",
        lastName: "Raghuwanshi",
        username: "jayeshraghuwanshi",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691132281/srX1jS6k_400x400_igwc48.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: 2,
    firstName: "Jayesh",
    lastName: "Raghuwanshi",
    username: "jayeshraghuwanshi",
    password: "jayeshraghuwanshi123",
    bio: "Handling backend | Ex-Congnizant | Seattle",
    website: "https://tusharanekarportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691132281/srX1jS6k_400x400_igwc48.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 1,
        firstName: "Tushar",
        lastName: "Anekar",
        username: "tusharanekar",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691147428/ICVH0M-A_400x400_rqit2p.jpg",
      },
    ],
    followers: [
      {
        _id: 1,
        firstName: "Tushar",
        lastName: "Anekar",
        username: "tusharanekar",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691147428/ICVH0M-A_400x400_rqit2p.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: 3,
    firstName: "Sachin",
    lastName: "Pachpute",
    username: "sachinpachpute",
    password: "sachinpachpute123",
    bio: "Future CEO | Godrej | Pune",
    website: "https://tusharanekarportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148492/ClzCyCi-_400x400_lnexmx.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 4,
        firstName: "Sudhanshu",
        lastName: "Shiwarkar",
        username: "sudhanshushiwarkar",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148306/KceP_-aN_400x400_g4tokc.jpg",
      },
    ],
    followers: [
      {
        _id: 4,
        firstName: "Sudhanshu",
        lastName: "Shiwarkar",
        username: "sudhanshushiwarkar",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148306/KceP_-aN_400x400_g4tokc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: 4,
    firstName: "Sudhanshu",
    lastName: "Shiwarkar",
    username: "sudhanshushiwarkar",
    password: "sudhanshushiwarkar123",
    bio: "Purist | Muscian | Photographer | Pune",
    website: "google.com",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148306/KceP_-aN_400x400_g4tokc.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 3,
        firstName: "Sachin",
        lastName: "Pachpute",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148492/ClzCyCi-_400x400_lnexmx.jpg",
      },
    ],
    followers: [
      {
        _id: 3,
        firstName: "Sachin",
        lastName: "Pachpute",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148492/ClzCyCi-_400x400_lnexmx.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: 5,
    firstName: "Prasad",
    lastName: "Jamdade",
    username: "prasadjamdade",
    password: "prasadjamdade123",
    bio: "Analyst | Cognizant | London",
    website: "https://tusharanekarportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148235/tOWaVOyF_400x400_djvlnw.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 6,
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunilchhetri",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148619/PXBUCG8O_400x400_zcbata.jpg",
      },
    ],
    followers: [
      {
        _id: 6,
        firstName: "Sunil",
        lastName: "Chhetri",
        username: "sunilchhetri",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148619/PXBUCG8O_400x400_zcbata.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: 6,
    firstName: "Sunil",
    lastName: "Chhetri",
    username: "sunilchhetri",
    password: "sunilchhetri123",
    bio: "My life revolves around shuttling between taking the field for India and Bengaluru FC. Couldn't have had it better",
    website: "https://tusharanekarportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148619/PXBUCG8O_400x400_zcbata.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 5,
        firstName: "Prasad",
        lastName: "Jamdade",
        username: "prasadjamdade",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148235/tOWaVOyF_400x400_djvlnw.jpg",
      },
    ],
    followers: [
      {
        _id: 5,
        firstName: "Prasad",
        lastName: "Jamdade",
        username: "prasadjamdade",
        profileAvatar:
          "https://res.cloudinary.com/diuf6w2yi/image/upload/v1691148235/tOWaVOyF_400x400_djvlnw.jpg",
      },
    ],
    bookmarks: [],
  },
];
