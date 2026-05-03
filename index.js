import express from "express";

const app = express();
const users = [
    {
        id: 1,
        name: "Ali Hassan",
        email: "ali@example.com",
        phone: "+252612345678",
        isActive: true,
    },
    {
        id: 2,
        name: "Amina Yusuf",
        email: "amina@example.com",
        phone: "+252615678901",
        isActive: false,
    },
    {
        id: 3,
        name: "Mohamed Noor",
        email: "mohamed@example.com",
        phone: "+252618888888",
        isActive: true,
    },
];

app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        msg: "successfully Sended",
        users: users,
    });
});

app.listen(3000, () => {
    console.log("Server Start at port 300");
});
