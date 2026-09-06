export function OlympusLandscape() {
  return (
    <div className="olympus-landscape" aria-hidden="true">
      <div className="olympus-landscape__sky" />
      <div className="olympus-landscape__rays" />
      <div className="olympus-landscape__stars" />
      <svg className="olympus-landscape__ridge olympus-landscape__ridge--far" viewBox="0 0 1440 500" preserveAspectRatio="none">
        <path d="m0 330 43-26 22 4 38-43 27 9 29-34 15 5 22-40 20 11 28-20 21-34 19 7 31-43 15 6 38-31 22-42 17 4 24-39 17 9 31-42 19 12 24 31 20 6 24 36 23-9 19 25 22-3 29 47 24 10 33 42 32-16 23 21 35-9 41 32 31-6 32-41 21 6 20-36 18 9 23-48 17 7 23-33 19 3 25-44 14 11 26-49 18-11 24-41 19 24 14-5 27 34 15 2 22 36 21-6 28 40 13-2 27 37 24 11 31 40 22-8 26 19 18-4 25 32 39-16 29 20 30-4 43 28V500H0Z" />
        <path className="olympus-landscape__snow" d="m335 162 22-42 17 4 24-39 17 9 31-42 19 12 24 31 20 6 24 36-29-13-19 7-35-40-18 27-18 5-23 33-18-6Zm650 50 23-33 19 3 25-44 14 11 26-49 18-11 24-41 19 24 14-5 27 34 15 2 22 36-37-19-17 8-39-42-21 38-26 14-16 36-22-4Z" />
      </svg>
      <svg className="olympus-landscape__ridge olympus-landscape__ridge--near" viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path d="M0 151q45 5 80 35l31-7 29 27 28-5q52 7 102 54l34-9 22 21q55 35 111 19l30-18 23 10 33-9 25 14q87 46 151 10l31 9 28-23 30 6q49-15 82-63l20 5 24-28 22 3 36-38 24 7 37-33 20 5 34-38 19 6 24-28 16 3 21-14 27 19 21-4 30 24 37-10 32 24 22-3 49 34V400H0Z" />
      </svg>
      <div className="olympus-landscape__mist olympus-landscape__mist--far" />
      <div className="olympus-landscape__mist olympus-landscape__mist--near" />
    </div>
  );
}
