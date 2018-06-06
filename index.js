import React from "React";
import PropTypes from 'prop-types';
import moment from "moment";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    numberInputClassName: PropTypes.string,
    numberInputStyle: PropTypes.object,
    selectClassName: PropTypes.string,
    selectStyle: PropTypes.object,
    wrapperClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,
    labelClassName: PropTypes.string,
    labelStyle: PropTypes.object,
    labelText: PropTypes.string,
    monthsLabel: PropTypes.string,
    daysLabel: PropTypes.string,
    weeksLabel: PropTypes.string,
    yearsLabel: PropTypes.string,
}

const defaultProps = {
    onChange: () => {},
    numberInputClassName: "",
    numberInputStyle: {},
    selectClassName: "",
    selectStyle: {},
    wrapperClassName: "",
    wrapperStyle: {},
    labelClassName: "",
    labelStyle: {},
    labelText: "Relatives Datum",
    monthsLabel: "Monate",
    daysLabel: "Tage",
    weeksLabel: "Wochen",
    yearsLabel: "Jahre"
}

class RelativeDatePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: null,
            periodType: "months",
            chosenDate: null
        };
    }


    changePeriodType = e => {
        this.setState(
            {
                periodType: e.target.value
            },
            () => {
                this.transformData();
            }
        );
    };

    changeNumber = e => {
        this.setState(
            {
                number: e.target.value
            },
            () => {
                this.transformData();
            }
        );
    };

    transformData = () => {
        const newChosenData = moment().add(
            this.state.number,
            this.state.periodType
        );
        this.setState(
            {
                chosenDate: newChosenData
            },
            () => {
                this.props.onChange(this.state.chosenDate);
            }
        );
    };

    onChangeTrigger = () => {
        this.transformData();
    };

    render() {
        return (
            <div
                class={this.props.wrapperClassName}
                style={this.props.wrapperStyle}
            >
                <span style={this.props.labelStyle}>{this.props.labelText}</span>
                <input
                    type="number"
                    value={this.state.number}
                    onChange={this.changeNumber}
                    style={this.props.numberInputStyle}
                    className={this.props.numberInputClassName}
                />
                <select
                    onChange={this.changePeriodType}
                    value={this.state.periodType}
                    style={this.props.selectStyle}
                    className={this.props.selectClassName}
                >
                    <option value="months">{this.props.monthsLabel}</option>
                    <option value="days">{this.props.daysLabel}</option>
                    <option value="weeks">{this.props.weeksLabel}</option>
                    <option value="years">{this.props.yearsLabel}</option>
                </select>
            </div>
        );
    }
}


RelativeDatePicker.propTypes = propTypes;
RelativeDatePicker.defaultProps = defaultProps;

export default RelativeDatePicker;
