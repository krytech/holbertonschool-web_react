export function NotificationItem({type, html, value}){
    if (html === undefined)
        return (
            <li data-notification-type={type}>
                {value}
            </li>
        );
    return (
            <li data-priority={type} dangerouslySetInnerHTML={html}></li>
        );
};

export default NotificationItem;