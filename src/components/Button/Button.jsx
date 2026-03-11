import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as: Tag = 'button',
  className,
  ...props
}) {
  return (
    <Tag
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
