import React, { useState, useEffect } from 'react';
import { Card, Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import CommentSection from './CommentSection';
import ScoreSection from './ScoreSection';
import Form from '../Form/Form';
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if(post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post]);

    if(!post) return null;

    if(isLoading) {
        return(
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    };

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => history.push(`/posts/${_id}`);

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h3">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
                        {post.tags.map((tag) => (
                            <Link to={`/tag/${tag}`} className={classes.tag}>
                                #{tag}&nbsp;
                            </Link>
                        ))}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">
                        Created by: 
                        <Link to={`/creator/${post.name}`} className={classes.creator}>
                            {post.name}
                        </Link>
                    </Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    {post.isAdmin !== true && (
                    <ScoreSection post={post} />
                    )}
                    <Divider style={{ margin: '20px 0' }} />
                    <CommentSection post={post} />
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://raw.githubusercontent.com/AnthonyGunardi/ActivePerson/master/client/src/images/blankPhoto.png'} alt={post.title} />
                </div>
            </div>
            <Form currentId={currentId} setCurrentId={setCurrentId} challengeData={post}/>
        {recommendedPosts.length ? (
            <div className={classes.section}>
                <Typography gutterBottom variant='h5'>You might also like:</Typography>
                <Divider />
                <Card className={classes.recommendedPosts}>
                    {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                        <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                            <Typography gutterBottom variant="h6">{title}</Typography>
                            <Typography gutterBottom variant="subtitle2">{name}</Typography>
                            <Typography gutterBottom variant="subtitle2">{message}</Typography>
                            <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                            <img src={selectedFile} width="200px" />
                        </div>
                    ))}
                </Card>
            </div>
        ) : (
            <></>
        )}
      </Paper>
    );
};

export default PostDetails;
