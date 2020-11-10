//importing Dependincies
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

//Create Components
//
const App = () => {
    return  (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    timeAgo = "Today at 2:00 AM" 
                    word = "Nice"
                    pic = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 4:30 PM" 
                    word="Nice Blog!"
                    pic = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Rossy" 
                    timeAgo="Yesterday at 5:00 PM"
                    word="Nice Post!"
                    pic = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Linus" 
                    timeAgo="Yesterday at 1:45 PM" 
                    word="Good"
                    pic = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mark" 
                    timeAgo="Two days Ago at 3:00 AM" 
                    word="Wonderful"
                    pic = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    ); 
};
//Show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
