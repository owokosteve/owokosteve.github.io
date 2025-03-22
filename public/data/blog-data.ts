export interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    read_time: number;
    date_published: string;
}

export const BLOGS: Blog[] = [
    {
        id: 1,
        title: "Good Programmers are Craftpeople",
        content: `A craftsman is a person who is highly 
                skilled at a particular task whereby they understand their tools well. 
                In the programming world, it's no different,  a good programmer 
                is often compared to a craftsman.`,
        image: "imgs/Kings-Palace-in-Rwanda.jpg",
        author: "Steve Owoko",
        read_time: 180,
        date_published: "13 March 2025"
    },
];