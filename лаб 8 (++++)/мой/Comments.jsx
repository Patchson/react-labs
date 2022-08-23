import React from "react";

export class Comments extends React.Component {

    constructor(props) {
        super()
        this.state = {
            img:'https://i.pinimg.com/564x/73/00/34/7300343099db28441cbf757d1ed2fed7.jpg',
            comments: [
                {
                    name:'kekixffffffffffffffffffffffff',
                    avatar:'https://i.pinimg.com/564x/73/00/34/7300343099db28441cbf757d1ed2fed7.jpg',
                    email:'kek@gmail.com',
                    message:'Всем привет!фвыафываыфваыфваыфвавыфавыфаыфвавыаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа',
                    secret:'q',
                    date: new Date(),
                }
            ],
            edit: null,
            info: null,
            delete: null,
            absolute1: null,
            absolute2: null,
            absolute3: null,
        }
    }

    avatars = [
        {
            name: 'Треугольник',
            url: 'https://i.pinimg.com/564x/73/00/34/7300343099db28441cbf757d1ed2fed7.jpg'
        },
        {
            name: 'Аниме',
            url: 'https://cspromogame.ru//storage/upload_images/avatars/832.jpeg'
        },
        {
            name: 'Пингвин',
            url: 'https://www.meme-arsenal.com/memes/986d79c580cfb906f8c0d19416106e04.jpg'
        },
        {
            name: 'Череп',
            url: 'https://android-obzor.com/wp-content/uploads/2022/03/1-2.jpeg'
        },
        {
            name: 'Админ',
            url: 'https://www.meme-arsenal.com/memes/00e80f6d75bdd2064f7aa626da541bce.jpg'
        },
        {
            name: 'Майнкрафт',
            url: 'https://sun9-49.userapi.com/impf/c637923/v637923574/1dc32/RT0UsrAtR4o.jpg?size=225x225&quality=96&sign=4b0e5f3a5a9cf157a6370cf03b8852fe&type=album'
        },
    ]

    onSubmit = (e) => {
        e.preventDefault()
        let comment = {
            name: this.name.value,
            avatar: this.state.img,
            email: this.email.value,
            message: this.message.value,
            secret: this.secret.value,
        }
        this.setState({
            comments: [...this.state.comments, comment]
        })
        this.name.value = null
        this.avatar.value = null
        this.email.value = null
        this.message.value = null
        this.secret.value = null
    }

    deleteComment = (comment) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i] === comment) {
                return this.setState(({ comments }) => ({
                    comments: [...comments.slice(0, i), ...comments.slice(i + 1)],
                    delete: null,
                    absolute3: null
                }));
            }
        }
    };

    editComment = (comment, text) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i] === comment) {
                comment.message = text;
                comment.date = new Date();
                return this.setState(({ comments }) => ({
                    comments: [...comments.slice(0, i), comment, ...comments.slice(i + 1)],
                    edit: null,
                    absolute1: null
                }));
            }
        }
    };

    render() {
        return (
            <div className="comments">
                <form className="comments-form" onSubmit={this.onSubmit}>
                    <input
                        placeholder="Имя"
                        ref={(e) => (this.name = e)}
                    />
                    <img
                        src={this.state.img}
                    />
                    <select onChange={(e) => this.setState({ img: e.target.value })}    >
                        {
                            this.avatars.map((avatar) => (
                                <option value={avatar.url}>{avatar.name}</option>
                            ))
                        }
                    </select>
                    <input
                        placeholder="Почта"
                        ref={(e) => (this.email = e)}
                    />
                    <textarea
                        placeholder="Сообщение"
                        ref={(e) => (this.message = e)}
                    />
                    <input
                        placeholder="Секретное слово"
                        ref={e => (this.secret = e)}
                    />
                    <button>Отправить</button>
                </form>
                <hr/>
                <div className="comments-body">
                    {
                        this.state.comments.map((comment) => (
                            <div className="comment">
                                <div className="comment-left">
                                    <img src={comment.avatar}/>
                                    <div>
                                        {comment.name}
                                    </div>
                                </div>
                                <div className="comment-right">
                                    <div className="comment-right-message">
                                        {comment.message}
                                    </div>
                                    <div className="comment-right-active">

                                        <div>
                                            <p 
                                                className='active-butt'
                                                onClick={
                                                    this.state.edit === null ? 
                                                    () => this.setState({
                                                        edit: comment, 
                                                        info: null, 
                                                        delete: null, 
                                                        absolute1: "active-absolute", 
                                                        absolute2: null, 
                                                        absolute3: null
                                                    }) : 
                                                    () => this.setState({
                                                        edit: null, 
                                                        absolute1: null
                                                    })
                                                }
                                            > Редактировать </p>
                                            <div className={this.state.absolute1}>
                                                { comment === this.state.edit ?
                                                    <CommentsEdit
                                                        comment = {this.state.edit}
                                                        editComment = {this.editComment}
                                                    /> : null}
                                            </div>
                                        </div>

                                        <div 
                                        >
                                            <p 
                                                className='active-butt'  
                                                onClick={
                                                    this.state.info === null ? 
                                                    () => this.setState({
                                                        edit: null, 
                                                        info: comment, 
                                                        delete: null, 
                                                        absolute1: null, 
                                                        absolute2: "active-absolute-2", 
                                                        absolute3: null
                                                    }) : 
                                                    () => this.setState({
                                                        info: null, 
                                                        absolute2: null
                                                    })
                                                }
                                            >Инфо</p>
                                            <div className={this.state.absolute2}>
                                                { comment === this.state.info ?
                                                    <CommentsInfo
                                                        comment = {this.state.info}
                                                    /> : null}
                                            </div>
                                        </div>

                                        <div>
                                            <p 
                                                className='active-butt'
                                                onClick={
                                                    this.state.delete === null ? 
                                                    () => this.setState({
                                                        edit: null, 
                                                        info: null, 
                                                        delete: comment, 
                                                        absolute1: null, 
                                                        absolute2: null, 
                                                        absolute3: "active-absolute-3"
                                                    }) : 
                                                    () => this.setState({
                                                        delete: null, 
                                                        absolute3: null
                                                    })
                                                }
                                            >Удалить</p>
                                            <div className={this.state.absolute3}>
                                                { comment === this.state.delete ? 
                                                    <CommentsDel
                                                        comment = {this.state.delete}
                                                        deleteComment = {this.deleteComment} 
                                                    /> : null }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

class CommentsEdit extends React.Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.editComment(this.props.comment, this.yourComment.value)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="name">Пользователь:{this.props.comment.name}</div>
        <div className="message">Email:{this.props.comment.email}</div>
        <textarea ref={(e) => (this.yourComment = e)} defaultValue={this.props.comment.message} />
        <input type="submit" value="Подтвердить" />
      </form>
    )
  }
}

class CommentsInfo extends React.Component {
    render() {
        return (
            <>
                <div>Пользователь - {this.props.comment.name}</div>
                <div>Почта - {this.props.comment.email}</div>
                <div>Дата изменения - {this.props.comment.date.toLocaleString()}</div>
            </>
        )
    }
}

class CommentsDel extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    if (this.yourWord.value === this.props.comment.secret) {
      return this.props.deleteComment(this.props.comment);
    }
    alert("Неправильное секретное слово!")
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={(e) => (this.yourWord = e)}
          placeholder="Секретное слово"
        />
        <input type="submit" value="Подтвердить" />
      </form>
    );
  }
}





// import React from "react";
// import { Component } from "react";

// export class Comments extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       img: "",
//       comments: [
//         {
//           name: "name1",
//           avatar: "/avatars/shrek.jpeg",
//           email: "w@mail.ru",
//           message: "message1",
//           secretWord: "q",
//           date: new Date(),
//         },
//         {
//           name: "name2",
//           avatar: "/avatars/shrek.jpeg",
//           email: "w@mail.ru",
//           message: "message2",
//           secretWord: "w",
//           date: new Date(),
//         },
//       ],
//       delete: null,
//       edit: null,
//       info: null,
//     };
//   }
//   avatars = [
//     {
//       img: "",
//       name: "Авка",
//     },
//     {
//       img: "/avatars/shrek.jpeg",
//       name: "Шрек",
//     },
//     {
//       img: "/avatars/donkey.jpg",
//       name: "Осел",
//     },
//     {
//       img: "/avatars/fiona.jpg",
//       name: "Фиона",
//     },
//     {
//       img: "/avatars/cat.jpg",
//       name: "Кот",
//     },
//   ];
//   onSubmit = (e) => {
//     e.preventDefault();
//     let comment = {
//       name: this.name.value,
//       avatar: this.state.img,
//       email: this.email.value,
//       message: this.message.value,
//       secretWord: this.secretWord.value,
//       date: new Date(),
//     };
//     this.setState({
//       comments: [...this.state.comments, comment],
//     });
//     this.name.value = null;
//     this.email.value = null;
//     this.message.value = null;
//     this.secretWord.value = null;
    
//   };
//   comments() {
//     return this.state.comments.map((comment) => {
//       return (
//         <div className="comment" key={comment.message}>
//           <div className="name">Пользователь:{comment.name}</div>
//           <div className="message">Комментарий:{comment.message}</div>
//           <img
//             style={{ height: "50px", width: "70px" }}
//             src={comment.avatar}
//             alt=""
//           />
//           <button onClick={() => this.setState({ edit: comment, delete: null, info: null })}>Ред.</button>
//           {comment === this.state.edit ? 
//           <CommentsEdit 
//             comment={this.state.edit}
//             editComment={this.editComment}
//           />
//            : null}
//           <button onClick={() => this.setState({ delete: comment, edit: null, info: null })}>
//             Удалить
//           </button>
//           {comment === this.state.delete ? (
//             <CommentsDel
//               deleteComment={this.deleteComment}
//               comment={this.state.delete}
//             />
//           ) : null}
//           <button onClick={() => this.setState({ info: comment, edit: null, delete: null })}>Инфо</button>
//           {comment === this.state.info ? (
//             <CommentsInfo comment={this.state.info} />
//           ) : null}
          
//         </div>
//       );
//     });
//   }
//   deleteComment = (comment) => {
//     for (let i = 0; i < this.state.comments.length; i++) {
//       if (this.state.comments[i] === comment) {
//         return this.setState(({ comments }) => ({
//           comments: [...comments.slice(0, i), ...comments.slice(i + 1)],
//           delete: null
//         }));
//       }
//     }
//   };
//   editComment = (comment, text) => {
//     for (let i = 0; i < this.state.comments.length; i++) {
//       if (this.state.comments[i] === comment) {
//         comment.message = text;
//         comment.date = new Date();
//         return this.setState(({ comments }) => ({
//           comments: [...comments.slice(0, i), comment, ...comments.slice(i + 1)],
//           edit: null
//         }));
//       }
//     }
//   }
//   render() {
//     return (
//       <>
//         <form onSubmit={this.onSubmit}>
//           <input
//             ref={(e) => (this.name = e)}
//             type="text"
//             placeholder="Имя пользователя"
//             name=""
//           />
//           <select onChange={(e) => this.setState({ img: e.target.value })}>
//             {this.avatars.map((avatar) => {
//               return (
//                 <option key={avatar.img} value={avatar.img}>
//                   {avatar.name}
//                 </option>
//               );
//             })}
//           </select>
//           <img
//             style={{ height: "50px", width: "70px" }}
//             src={this.state.img}
//             alt=""
//           />
//           <input
//             ref={(e) => (this.email = e)}
//             type="email"
//             placeholder="Email"
//           />
//           <textarea placeholder="Комментарий" ref={(e) => (this.message = e)} />
//           <input
//             ref={(e) => (this.secretWord = e)}
//             type="text"
//             placeholder="Секретное слово"
//           />
//           <input type="submit" value="Отправить" />
//         </form>
//         {this.comments()}
//       </>
//     );
//   }
// }

// class CommentsDel extends Component {
//   onSubmit = (e) => {
//     e.preventDefault()
//     if (this.yourWord.value === this.props.comment.secretWord) {
//       return this.props.deleteComment(this.props.comment);
//     }
//     alert("Неправильное секретное слово!")
//   }
//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           ref={(e) => (this.yourWord = e)}
//           placeholder="Секретное слово"
//         />
//         <input type="submit" value="Подтвердить" />
//       </form>
//     );
//   }
// }
// class CommentsEdit extends Component {
//   onSubmit = e => {
//     e.preventDefault()
//     this.props.editComment(this.props.comment, this.yourComment.value)
//   }
//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <div className="name">Пользователь:{this.props.comment.name}</div>
//         <div className="message">Email:{this.props.comment.email}</div>
//         <textarea ref={(e) => (this.yourComment = e)} defaultValue={this.props.comment.message} />
//         <input type="submit" value="Подтвердить" />
//       </form>
//     )
//   }
// }
// class CommentsInfo extends Component {
//   render() {
//     let comment = this.props.comment;
//     return (
//       <>
//         <div className="name">Пользователь:{comment.name}</div>
//         <div className="date">Дата изменения:{comment.date.toLocaleString()}</div>
//         <div className="message">Email:{comment.email}</div>
//       </>
//     );
//   }
// }
