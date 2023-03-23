import LiveTimestamp from "./LIveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

function Article({article}: Props) {
  return (
    <article className='bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg  hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out'>
      {article.image && (
        <img
          className='h-56 w-full object-cover rounded-t-lg shadow-md'
          src={article.image}
          alt={article.title}
        />
      )}
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col flex-1 p-5'>
          <h2 className='font-serif font-bold'>{article.title}</h2>
          <section>b
            <p className='text-xs line-clamp-4'>{article.description}</p>
          </section>
          <footer className='text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400'>
            <p>{article.source} - </p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
export default Article;
