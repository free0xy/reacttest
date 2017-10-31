
let ArrayCom = React.createClass({
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
ReactDOM.render(
    <ArrayCom>
        <span>这是第一条</span>
        <span>这是第2条</span>
    </ArrayCom>,
    document.getElementById('example')
)