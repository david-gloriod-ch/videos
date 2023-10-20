class User {
    isAuthorized() {
        return true;
    }
}


































const user = new User();

if (!user.isAuthorized())
{
    console.log(`You're not authorized`);
}
else
{
    console.log(`Welcome to the jungle`);
}

























