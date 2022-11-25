import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/luizcarlosgoulart.png" 
                alt="" 
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Luiz Carlos Goulart </strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:00"> Cerca de 1h atrás </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deleter comentário"> 
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick = {handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ratione. Adipisci voluptatem ut, aliquid quis maxime corrupti necessitatibus temporibus laboriosam quos est repudiandae, sit quam facilis eaque labore quod officia!