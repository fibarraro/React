import React from 'react';
import ReactDom from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning?</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:00 pm" content="Test" avatar={faker.image.avatar()}></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Félix" timeAgo="Today at 8:00 pm" content="Test" avatar={faker.image.avatar()}></CommentDetail>
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('#root'));