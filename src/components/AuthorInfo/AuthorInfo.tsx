
type AuthorInfoProps = {
  imageUrl: string;
  authorName: string;
  date: Date;
};

const dateFormatter: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'short', // Use 'short' for abbreviated month (e.g., 'Sep')
  year: 'numeric'
};

/**
 * This is a AuthorInfo component. 
 */
export const AuthorInfo = ({ imageUrl, authorName, date}: AuthorInfoProps) => {
  return (
    <div className="flex flex-row gap-3">
      <div>
        <img src={imageUrl} alt={authorName} width={50} className="rounded-full" />
      </div>
      <div className="flex flex-col justify-evenly">
        <p>{authorName}</p>
        <p>{date.toLocaleDateString('en-US', dateFormatter)}</p>
      </div>    
    </div>
  );
};

export default AuthorInfo;