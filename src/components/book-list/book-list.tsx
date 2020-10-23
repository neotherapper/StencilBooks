import { Component, h } from '@stencil/core';

const bookList  = [
  {
    title: "In Search of Lost Time",
    rate: 9.9,
    synopsis: "Angelos is learning Typescript",
  },
  {
    title: "Don Quixote",
    rate: 9.8,
    synopsis: "Angelos is learning stencil",
  },
  {
    title: "Moby Dick",
    rate: 9.4,
    synopsis: "Angelos is learning web components",
  }
];

@Component({
  tag: 'book-list',
  styleUrl: 'book-list.css',
  shadow: true,
})
export class BookList {
  render() {
    return (
        bookList.map((book, index) => {
          return (
            <book-list-item
              rating={book.rate.toString()}
              title={book.title}
              position={index.toString()}
              synopsis={book.synopsis}
            />
          )
        })
      )
    }

}
