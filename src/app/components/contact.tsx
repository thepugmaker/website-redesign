export default function Contact() {
    return (
      <div className="justify-left flex flex-col items-start ml-4 text-white font-mono">
          <p className="font-bold">
            Here are my contact links & social media profiles.
          </p>
          <p className="font-medium mt-4">
              <a
                  href="mailto:contact@mrpugpug.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  contact@mrpugpug.com
              </a>
              <a
                  href="https://discord.com/users/mr.pugpug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  Discord: mr.pugpug
              </a>
              <a
                  href="https://github.com/thepugmaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  Github: thepugmaker
              </a>
              <a
                  href="https://www.youtube.com/@mrpugpug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 block"
              >
                  YouTube: mrpugpug
              </a>
          </p>
    </div>
    );
}
