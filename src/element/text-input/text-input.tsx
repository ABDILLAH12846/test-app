import styles from './text-input.module.css'
interface Props {
    type: string;
    value: string;
    onChange: (e: string) => void;
    placeholder: string;
    error?: boolean;
}

export default function TextInput(props: Props) {
    const { type, value, onChange, placeholder, error } = props;
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => {
                onChange(e.target.value)}}
            placeholder={placeholder}
            className={`${styles.textInput} ${error ? styles.error : ''}`}
        />
    )
}
