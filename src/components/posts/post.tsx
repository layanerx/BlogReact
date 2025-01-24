import './post.css';
import icone from '../../assets/icone.png';

interface PostProps {
  author: string;
  title: string;
  postText: string;
}

export function Post({ author, title, postText }: PostProps) {
  return (
    <article className='article-post'>
      <div className="post-author">
      <img alt="Icone Autor" src={icone} />
        <div className="post-author-name">{author}</div>
      </div>
      <h3 className="post-title">{title}</h3>
      <p className="post-text">{postText}</p>
    </article>
  );
}
