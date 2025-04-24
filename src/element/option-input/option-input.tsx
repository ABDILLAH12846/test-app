import styles from './option-input.module.css'
interface Props {
    value: string;
    onChange: (e: string) => void;
    options: {
        value: string;
        label: string;
    }[];
}

export default function OptionInput(props: Props) {
    const { value, onChange, options } = props;
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.optionInput}
        >
            {
                options.map((item, idx) => (
                    <option value={item.value} key={idx}>{item?.label}</option>
                ))
            }
        </select>
    )
}
