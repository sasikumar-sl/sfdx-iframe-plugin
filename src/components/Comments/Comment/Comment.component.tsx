import React from "react";

import {
    Profile,
    Container,
    CommentedAt,
    CommentBody,
    CommentHeader,
    CommentWrapper,
} from './Comment.styles';

type Props = {
    comment?: any;
};

const Comment: React.FC<Props> = () =>{
    return  (
        <Container>
            <CommentWrapper>
                <CommentHeader>
                    <Profile>
                        <span>Sasikumar Ganesan</span>
                    </Profile>
                    <CommentedAt>Yesterday, 3:11PM</CommentedAt>
                </CommentHeader>
                <CommentBody>
                    This should be escalated as quickly as possible to ensure that our customer gets the prompt help they need
                </CommentBody>
            </CommentWrapper>
        </Container>
    );
};


export default Comment;