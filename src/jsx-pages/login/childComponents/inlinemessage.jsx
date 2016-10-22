rc.inlineMessageComponent = class inlineMessageComponent extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isClicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        e.preventDefault();

        this.setState({
            isClicked: true
        })
    }

    render () {
        var partial = !this.state.isClicked
            ? <a href="#" className={this.props.linkClassName} onClick={this.handleClick}>{this.props.linkText}</a>
            : <div className={this.props.copyClassName}>{this.props.copyText}</div>;

        return(
            <p className={this.props.className}>
                {partial}
            </p>
        )
    }
}
