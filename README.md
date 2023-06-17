# Sadaf_Test
Theory Questions

Ques1: Mention the working of Internet Website in Terms of Front-end & Back-end Divisions

Ans: The user performs a request and that request is transferred to the server. In response to that request a webpage is returned to the user, which is called response. This process comes under Front-End. The technologies which are used in Front-End are: HTML, CSS, JavaScript, React. When the request reaches server then the server searches for that information in the database. From that database required information is fetched and returned to the server. This is known as Back-End. The technologies which are used in Back-End are: Python, NodeJS, MongoDB, APIs.

Ques2: What are tags in HTML? Explain the each category of tag with an Example.

Ans: In HTML, tags are used to define the structure and content of the webpage. They can have attributes that provides the additional information about the tag. There are various categories of tags available. Some of them are: 
1.Heading Tag: 
Example: Used to add heading. vary from <h1> to <h6>
  <h1>Heading 1</h1>
Form Tag: They are useful in adding a form in the webpage. They are mainly 2 subtags of form tag along with various attributes. The subtags are: and Example:
 <form>
 <label for="name">Name:</label>
 <input type="text" id="name" name="name">
 <form>
List Tag: It is used to add lists to the HTML document. The list can be ordered or unordered. Types of lists can be differentiated using
and
tags. Example:
  <ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
Img tag: Img tag is used to add image to the webpage. Example: <img src="image.jpg" alt="Image Description">

Video Tag: Video tag is used to add video to the webpage either from the computer or adding any video directly from the internet. Example: <video src=".mp4" controls></video>

Ques3: Explain the working Procedure of Virtual DOM.

Ans: Virtual DOM is a concept that libraries of React use to improve the efficiency of updating the user-interface of a web application The Virtual DOM builds the Virtual DOM tree, a compact in-memory replica of the real DOM, when a component is first drawn. When a application changes its state, the virtual DOM creates a new Virtual DOM tree representing the updated interface. The Virtual DOM compares the previous tree with the new one and after the identification of differences it calculate the minimum set of changes needed to update the actual DOM. Instead of directly changing he real DOM, the virtual DOM optimizes the updates.

Ques4: Mention some Differences between MySQL and No SQL 
   Ans: 1) MySQL folows a relational data model where schemas are used, whereas NoSQL are schema-less and do not enforce relationships between data.

MySQL improves performance by adding more hardware resources to a single server. NoSQL distribute data across multiple servers.

In MySQL, any changes to the schema requires modification to the existing data. In NoSQL, databases are more flexible.

MySQL uses SQL as its query language, which provides a standardized way to interact with the database. NoSQL databases use their own query languages or APIs specific to their data model.

MySQL ensures integrity and data consistency. NoSQL databases, achieve better scalability and performance. They often prioritize eventual consistency over strict consistency guarantees.

Ques5: Explain any one DBMS Technology in your own words. 
   MongoDB is a NoSQL database that follows a document-oriented data model. It stores data in flexible, self-describing documents, similar to JSON objects, allowing for easy representation and storage of complex data structures. One of the advantages of MongoDB is its flexibility. You can easily add or remove fields within a document without affecting other documents in the collection. This makes it convenient for handling data that may evolve over time or have varying structures. It supports sharding, which means it can distribute data across multiple servers or clusters. This allows for high scalability and performance when dealing with large datasets and high traffic loads.
