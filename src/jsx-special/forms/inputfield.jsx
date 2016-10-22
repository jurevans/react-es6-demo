<<<<<<< HEAD
rc.inputFieldComponent = React.createClass({
    getInitialState() {
        return {
            value : '',
            valid : true
        }
    },
    defaultProps: {
        name: 'input',
        className: 'forminput',
        type: 'text',
        required: '',
        value: '',
        maxLength: 0
    },
    componentDidMount: function() {
        var self = this;

        grandCentral.on('to_inputField_' + this.props.name, function(data) {
=======
rc.inputFieldComponent = class InputFieldComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            value : '',
            valid : true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        let self = this;

        grandCentral.on('to_inputField_' + this.props.name, (data) => {
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            self.setState({
                value : self.state.value,
                valid : data.valid
            })
        });
<<<<<<< HEAD
    },
    handleChange: function(name, e) {
        var value = e.target.value;
=======
    }

    handleChange (name, e) {
        let value = e.target.value;
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

        this.setState({
            value : value,
            valid : typeof(this.props.validate) !== 'undefined'
                ? this.props.validate.call(this, value)
                : true
        });

        // re-enable button, hide errors
        /* NOTE: May want to parameterize this behavior! */
        grandCentral.trigger('to_button', {enabled: true});
        grandCentral.trigger('to_errorMessage', {show: false});
<<<<<<< HEAD
    },

    render() {
        var errorClass = this.state.valid ? null : this.props.errorClass;
=======
    }

    render() {
        let errorClass = this.state.valid ? null : this.props.errorClass;
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

        return (
            <div className={errorClass}>
                <label htmlFor={this.props.name} className={this.props.labelClass}>
                    {this.props.labelText}
                </label>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    className={this.props.inputClass}
                    type={this.props.type}
                    required={this.props.required}
                    value={this.state.value}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange.bind(null, this)} />
            </div>
            );
        }
<<<<<<< HEAD
});
=======
};
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
