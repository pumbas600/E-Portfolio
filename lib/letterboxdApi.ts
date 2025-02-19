import { XMLParser } from 'fast-xml-parser';

export interface LetterboxdLogEntry {
  title: string;
  link: string;
  rating?: number;
  rewatched: boolean;
  watchedAt: Date;
  imageUrl: string;
}

export interface RssData {
  rss: {
    channel: {
      item: {
        link: string;
        'letterboxd:watchedDate': string;
        'letterboxd:rewatch': 'Yes' | 'No';
        'letterboxd:filmTitle': string;
        'letterboxd:filmYear': string;
        'letterboxd:memberRating'?: string;
        description: string;
      }[];
    };
  };
}

async function fetchRssFeed(): Promise<string> {
  const response = await fetch('http://localhost:3000/rss.xml');
  return await response.text();
}

function parseRssFeed(rssFeed: string): LetterboxdLogEntry[] {
  const logEntries: LetterboxdLogEntry[] = [];
  const parser = new XMLParser();
  const rssContent = parser.parse(rssFeed) as RssData;

  for (const item of rssContent.rss.channel.item) {
    logEntries.push({
      title: item['letterboxd:filmTitle'],
      link: item.link,
      rating: item['letterboxd:memberRating'] ? Number(item['letterboxd:memberRating']) : undefined,
      rewatched: item['letterboxd:rewatch'] === 'Yes',
      watchedAt: new Date(item['letterboxd:watchedDate']),
      imageUrl: item.description.match(/src="([^"]*)"/)?.[1] ?? '',
    });
  }

  return logEntries;
}

export async function fetchLastWatched(): Promise<LetterboxdLogEntry[]> {
  const rssFeed = await fetchRssFeed();
  return parseRssFeed(rssFeed);
}
