import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}> 
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography variant='subtitle1' gutterBottom key={i}>
                            <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div className={classes.commentFormContainer}>
                        <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                        <TextField 
                            fullWidth
                            rows={4}
                            variant='outlined'
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button 
                            className={classes.comment} 
                            fullWidth 
                            variant='contained' 
                            disabled={!comment} 
                            onClick={handleClick} 
                            color='primary'
                        >
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CommentSection;
