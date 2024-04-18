import ballerina/http;

type User record {
    string pubName;
};

service / on new http:Listener(9090) {
    resource function get user() returns User {
        User user = {pubName: "John"};
        return user;
    }
}
