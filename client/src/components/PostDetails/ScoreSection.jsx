import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Dialog } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { updatePost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const [scores, setScores] = useState(post?.score);
    const [score, setScore] = useState('');
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const handleClick = async () => {
        const newScores = await dispatch(updatePost(post._id, {score, isGraded: true}));
        setScores(newScores);
        setScore('');
        setConfirmModalOpen(false);
    }

    const onCloseHandle = () => {
		setConfirmModalOpen(false);
	}

    return (
        <>
            {post?.isAdminPost === false && (
            <div className={classes.commentsOuterContainer}>
                <div className={classes.scoreInnerContainer}> 
                    <Typography gutterBottom variant='h6'>Score</Typography>
                        <Typography variant='h3' gutterBottom>
                            <strong>{scores}</strong>
                            <strong>/100</strong>
                        </Typography>
                    <div ref={commentsRef} />
                </div>
                {user?.result?.isAdmin && (
                    <div style={{ width: '70%'}}>
                        <Typography gutterBottom variant='h6'>Add Score Here</Typography>
                        <TextField 
                            fullWidth
                            rows={4}
                            variant='outlined'
                            label="Score"
                            multiline
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                        <Button 
                            className={classes.comment} 
                            fullWidth 
                            variant='contained' 
                            disabled={!score} 
                            onClick={() => setConfirmModalOpen(true)}
                            color='primary'
                        >
                            Score
                        </Button>
                    </div>
                )}
                <Dialog open={confirmModalOpen} onClose={onCloseHandle} aria-labelledby="form-dialog-title"
                    PaperProps={{ style: { backgroundColor: 'white', color: '#333', minWidth: '40%' } }}
                    style={{ width: '100%' }}>
                    <div className={classes.modalQuestion}>
                        <Typography variant="h6" className={classes.modalHead}>Are you sure to add the score?</Typography>
                        <div className={classes.modalBtns}>
                            <Button variant="outlined" color="primary" onClick={handleClick} >Confirm</Button>
                            <Button variant="outlined" color="secondary" onClick={onCloseHandle}>Cancel</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
            )}
        </>
    );
};

export default CommentSection;
