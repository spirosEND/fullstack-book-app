package com.example.bookcrudh2.service;

import com.example.bookcrudh2.entity.Book;
import com.example.bookcrudh2.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {


    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    //getAll books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    //find book by id
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    //save a book
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    //check if the book exists in the database
    public Book updateBook(Long id, Book book) {
        Optional<Book> existingBookOptional = bookRepository.findById(id);

        if (existingBookOptional.isPresent()) {

            //update the book with provided data
            Book existingBook = existingBookOptional.get();
            existingBook.setTitle(book.getTitle());
            existingBook.setAuthor(book.getAuthor());
            existingBook.setIsbn(book.getIsbn());

            //save the updated book
            return bookRepository.save(existingBook);

        } else {

            throw new RuntimeException("Book not found in database");
        }
    }

    public void deleteBook(Long id) {

        //check if the book exists in  the database
        Optional<Book> bookOptional = bookRepository.findById(id);

        if (bookOptional.isPresent()) {
            bookRepository.deleteById(id);

        }
    }

}


