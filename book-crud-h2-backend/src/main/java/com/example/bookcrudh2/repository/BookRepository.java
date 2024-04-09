package com.example.bookcrudh2.repository;

import com.example.bookcrudh2.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
