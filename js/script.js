
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