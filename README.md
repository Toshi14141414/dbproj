# Neighbor - CS6083 Final Project

## Project Info

Design a relational backend for a website that allows people to communicate with others in their neighborhood. That is, people should be able to sign up for the service and specify where they live; they can then send and receive messages to other users living close by, and participate in discussions with those users. There are existing services such as nextdoor.com that you could look at to understand the general concept.

## App Manual

#### Login

![image-20191219014936413](https://github.com/Toshi14141414/dbproj/blob/master/info_pictures/image-20191219014936413.png)

This is the main index page for user login and register. When you enter the email and password, click the sign in button and you will go to the main page. If you don't have an account, you can click register and go to the register page signing up an account.

#### Register

![image-20191219090101573](https://github.com/Toshi14141414/dbproj/blob/master/info_pictures/image-20191219090101573.png)

###### Join Block

![image-20191219090150840](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219090150840.png)

After the user register, all avaible blocks where the user resides will be shown and the user must select one of them to join.

###### Home Page

![Screen Shot 2019-12-19 at 11.18.05 PM](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/Screen Shot 2019-12-19 at 11.18.05 PM.png)

After logging in, the user will be able to see all feeds (on the right section of the page) and can choose to edit profile, read news ('news' here means friend requests from other users or block join request), and create a new topic with multiple recipients. In News Section, an open envolope means there is no unread messages, and an red evolope means there are unread messages.

![image-20191219015102361](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219015102361.png)

Also, the user can list current friends and neighbors and can choose to send messages to them individually.

![image-20191219015132253](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219015132253.png)

Also, user can choose to show different types of feeds (Friends, Neighbor, block, hood, and all feeds obviously). By default, the website lists threads from all feeds.

![image-20191219015155322](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219015155322.png)

###### Start New Topic in Friends/Block/Hood

User can choose to send messages with multiple receipients (friends, block or hood).

![image-20191219020203576](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219020203576.png)

###### Start New Topic with Friend/Neighbour

The user can select an individual friend or neighbor shown in the list to chat with by clicking the "send message" button. After clicking send the page will be refreshed and the thread created will be seen.

![image-20191219091305088](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219091305088.png)

###### Friend Requests

When another user sends a friend request to current user, he/she will receive a message about this request and can choose either to accept or decline. After making the choice, the request will be cleared.

![image-20191219085747032](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219085747032.png)

###### Block Requests

When another user sends a join block request to the whole block, all current user in the block will receive a message about this request and can choose either to accept or decline. After making the choice, the request will be cleared in current user's news list, while other users in the block are still able to see the request and make decisions.

![image-20191219085849297](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219085849297.png)

###### Threads in Feeds

Threads are shown with title, the start user and start date are shown. Click on the title will list all messages in that thread.

![Screen Shot 2019-12-20 at 12.07.34 AM](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/Screen Shot 2019-12-20 at 12.07.34 AM.png)

###### List all messages in a thread and reply

![image-20191219020422751](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219020422751.png)

###### Search

Also the user can search messages with certain keywords, a list of threads containing that message will be shown.

![image-20191219124509561](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219124509561.png)

When you search a key word, all the thread which has this key word will show as a list.

![Screen Shot 2019-12-20 at 12.12.14 AM](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/Screen Shot 2019-12-20 at 12.12.14 AM.png)

And after click the result, you can go to the post page.

![Screen Shot 2019-12-20 at 12.13.17 AM](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/Screen Shot 2019-12-20 at 12.13.17 AM.png)

###### Leave Block

A user can choose to leave a block and provide the new address on google map.

![image-20191219113512435](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219113512435.png)

Now the suggest block list is shown (in this case only one block).

![image-20191219113627560](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219113627560.png)

Also if a user hasn't join any block yet, he/she will be asked to join a block.

![image-20191219113724465](/Volumes/ALEXmac/NYU/2019 Fall/Database/New Folder With Items/image-20191219113724465.png)

## Source Code

##### GitHub Repository

- Frontend & Server ( React & Express.JS )

  https://github.com/Toshi14141414/dbproj

- SQL

  https://github.com/Toshi14141414/dbsql
