import { IconProps } from './IconProps';

export default function ThymeleafIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 256">
      <defs>
        <mask id="leafMask">
          <rect width="256" height="256" fill="white" />
          <path
            fill="black"
            d="M218.187 34.965c-31.528 38.634-70.032 70.992-111.094 99.043c-13.348 9.555-28.084 18.06-38.347 31.144c-3.92 6.886-4.865 16.584 1.836 22.172c11.16 10.517 28.544 12.805 42.525 6.917c19.575-7.456 33.094-24.427 44.458-41.25c25.358-36.533 40.737-78.555 60.622-118.026"
          />
          <path
            fill="black"
            d="M200.104 48.324c-39.254 31.102-70.652 47.91-110.797 62.37c-12.116 5.184-25.1 11.763-30.73 24.485c-5.794 12.036-3.895 28.82 2.753 39.963c-.497-4.69 2.009-12.27 5.738-15.829c12.372-13.778 28.488-22.806 42.663-33.269l.034-.028l.034-.023c32.806-22.53 63.563-48.276 90.305-77.67"
          />
        </mask>
      </defs>
      <rect fill="currentColor" width="256" height="256" mask="url(#leafMask)" />
    </svg>
  );
}
