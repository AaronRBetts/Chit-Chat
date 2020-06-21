const { v4: uuidv4 } = require("uuid");

const createUser = ({ name = "", socketId = null } = {}) => ({
  id: uuidv4(),
  name,
  socketId,
});

const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender,
});

const createChat = ({
  messages = [],
  name = "Public chat",
  users = [],
  isCommunity = false,
} = {}) => ({
  id: uuidv4(),
  name: isCommunity ? "Public chat" : createChatNameFromUsers(users),
  messages,
  users,
  typingUsers: [],
  isCommunity,
});

const createChatNameFromUsers = (users, excludedUser = "") => {
  return users.filter((u) => u !== excludedUser).join(" & ") || "Empty Users";
};

const getTime = (date) => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  createMessage,
  createChat,
  createUser,
  createChatNameFromUsers,
};
