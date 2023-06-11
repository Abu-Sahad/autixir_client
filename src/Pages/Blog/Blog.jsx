const Blog = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="mt-2">Access and refresh tokens are frequently employed in authentication and authorization procedures. Here is a quick rundown of what they are and how they function:
                    Entry Token: After successful authentication, an authorization server will issue an access token to a client (such as a web or mobile application). It symbolizes the clients permission to access protected resources using a users credentials.
                    reload token The authorization server additionally provides a client with a refresh token during the authentication procedure. It is a persistent credential. This prevents the user from having to reauthenticate when the current access token expires.

                    It is typically advised to save the access token on the client side rather than the refresh token. Refresh tokens are more sensitive and have a longer lifespan than access tokens, which are only valid for a users current session. The following are some popular client-side storage choices for access tokens: <br />
                    1. memory <br />
                    2. Regional Storage <br />
                    3. cookies</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-xl font-bold">Compare SQL and NoSQL databases?</h1>
                <p className="mt-2">Sql: <br />
                    1.Relational models are the foundation of SQL databases, which use structured query language (SQL). <br />
                    2. They contain a specified schema that uses tables, columns, and relationships to impose data integrity. <br />
                    3.SQL databases work effectively with organized data that has clear linkages and demanding querying needs.</p> <br />

                Using NoSQL databases: <br />

                1. A flexible, schema-less data paradigm is offered by NoSQL databases. <br />
                2. They keep data in a variety of formats, including graphs, documents, columns, and key-value pairs. <br />
                3. High performance and horizontal scaling are made possible by NoSQL databases scalability. <br />
                4. They can effectively manage significant amounts of semi- or unstructured data.
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-xl font-bold">What is express js? What is Nest JS?</h1>
                <p className="mt-2">Express.js is a lightweight and adaptable Node.js web application framework that offers a rich range of functionality for creating online applications and APIs. By offering a clear-cut and impartial approach, it makes the process of developing server-side applications easier.</p> <br />

                Nest.js is a Node.js framework for creating scalable and effective server-side applications that is progressive and extendable. To improve the organization and maintainability of the code, it makes use of contemporary JavaScript or TypeScript and adheres to architectural patterns like MVC (Model-View-Controller) and dependency injection.

            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h1>
                <p className="mt-2">The MongoDB aggregate provides an effective framework for carrying out data aggregation tasks like grouping, filtering, and data transformation in the MongoDB database. Using a pipeline of phases that processes and transforms documents in a sequential manner, it enables you to carry out complicated data manipulations and computations.</p>
            </div>
        </div>
    );
};

export default Blog;

