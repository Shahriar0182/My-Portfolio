
import React, { useState, useEffect } from "react";

interface AnimatedTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const AnimatedTypewriter = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1500,
}: AnimatedTypewriterProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  // Array of interesting gradient styles
  const gradients = [
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-pink-400 to-red-500",
    "bg-gradient-to-r from-blue-400 to-indigo-500",
    "bg-gradient-to-r from-indigo-500 to-purple-500",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;
    const currentText = text;
    
    const handleTyping = () => {
      // Typing logic
      if (!shouldDelete && currentText.length < currentWord.length) {
        setText(currentWord.substring(0, currentText.length + 1));
        return;
      }
      
      // Deleting logic
      if (shouldDelete && currentText.length > 0) {
        setText(currentWord.substring(0, currentText.length - 1));
        return;
      }
      
      // Switch between typing and deleting
      if (!shouldDelete && currentText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
        return;
      }
      
      // Move to next word when current word is deleted
      if (shouldDelete && currentText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setColorIndex((prevIndex) => (prevIndex + 1) % gradients.length);
        return;
      }
    };
    
    // Set the typing/deleting speed
    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={`${gradients[colorIndex]} bg-clip-text text-transparent font-bold transition-colors duration-300`}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedTypewriter;
