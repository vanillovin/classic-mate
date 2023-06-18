type ClassicSearchFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  placeholder: string;
}

function ClassicSearchForm({ value, onChange, onClick, placeholder } : ClassicSearchFormProps) {
  return (
    <div className="relative w-full mb-4">
      <input
        aria-label="Search Classics"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 bg-white bg-opacity-80 border-2 rounded-xl border-amber-200 text-sm md:text-base hover:border-yellow-400`}
      />
      {value && <CancelButton onClick={onClick} />}
      <svg
        className="absolute right-2 top-2 w-5 h-5 text-yellow-800 sm:right-3 sm:top-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default ClassicSearchForm;

function CancelButton({ onClick } : { onClick : () => void }) {
  return (
    <button
      onClick={onClick}
      className='absolute right-8 top-2 w-5 h-5 text-rose-800 sm:right-10 sm:top-3'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none" 
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className=""
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}