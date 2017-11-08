
let ArrayCom = React.createClass({
    getDefaultProps:function () {
        return {
            title:'这是默认'
        }
    },
    propTypes:{
        title:React.PropTypes.string.isRequired
    },
    render:function () {
        return <ul>
            {
                React.Children.map(this.props.children,function (val) {
                    return <li>this is {val}</li>
                })
            }
        </ul>
    }
});
var a='2'
ReactDOM.render(
    <ArrayCom title={a}>
        <span>这是第一条</span>
        <span>这是第2条</span>
    </ArrayCom>,
    document.getElementById('example')
)

var XyCom = React.createClass({
    getDefaultProps:function () {
        return {
            tit:'default'
        }
    },
    propTypes:{
        tit:React.PropTypes.string.isRequired
    },
    handleClick:function () {
        this.refs.haha.focus();
        this.refs.haha.value='haha'
    },
    render:function () {
        return (
            <div>
                <input type="text" ref="haha" placeholder={this.props.tit} />
                    <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
});

ReactDOM.render(
    <XyCom tit="明天"/>,
    document.getElementById('example')
)

let ClickCom = React.createClass({
    getInitialState:function () {
        return {
            liked:false
        }
    },
    getDefaultProps:function () {
        return {
            tit:'默认属性值'
        }
    },
    propTypes:{
        tit:React.PropTypes.string.isRequired
    },
    handleClick:function (event) {
        this.setState({liked:!this.state.liked});
        this.refs.xyinput.value = !this.state.liked
    },
    render:function () {
        let isSub = this.state.liked?'喜欢':'不爱';
        return (
            <div>
                <input type="text" ref="xyinput" placeholder={this.props.tit}/>
                <span>你{isSub}点击这个按钮</span>
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
});
ReactDOM.render(
    <ClickCom tit="haha"/>,
    document.getElementById('example')
)

let InpCom = React.createClass({
    getInitialState:function () {
        return {
            val:'这是默认表单值'
        }
    },
    handleChange:function (e) {
        this.setState({val:e.target.value});
    },
    render:function () {
        let val = this.state.val;
        return (
            <div>
                <input type="text" value={val} onChange={this.handleChange}/>
                <p>{val}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <InpCom/>,
    document.getElementById('example')
)

let StyleCom = React.createClass({
    getInitialState:function () {
        return {
            op:1
        }
    },
    componentDidMount:function () {
        this.timer = setInterval(function () {
            let op = this.state.op;
            op -= 0.1;
            if(op <= 0.1){
                op=1;
            }
            this.setState({
                op:op
            })
        }.bind(this),100)
    },
    render:function () {
        return (
            <div>
                <h3 style={{opacity:this.state.op}}>{this.props.name}</h3>
            </div>
        )
    }
});
ReactDOM.render(
    <StyleCom name="这是渐变2"/>,
    document.getElementById('example')
)