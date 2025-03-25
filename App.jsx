import React, { useState, useRef } from 'react';
import { Button, Container, Text, Group, Stack, Image } from '@mantine/core';

const ColoredTextGenerator = () => {
  const textareaRef = useRef(null);

  const applyColor = (color) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      const span = document.createElement('span');
      span.style.color = color;
      span.textContent = selectedText;

      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopy = () => {
    const text = textareaRef.current.innerHTML;
    const formattedText = `\`\`\`ansi\n${text}\n\`\`\``;
    navigator.clipboard.writeText(formattedText).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  return (
    <Container style={{ backgroundColor: '#36393F', color: '#FFF', textAlign: 'center', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Add logo using the URL */}
      <Image src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/videodubberlogo.svg" alt="VideoDubberAI Logo" width={120} style={{ margin: '0 auto', display: 'block' }} />

      <Text align="center" size="xl" style={{ marginBottom: '20px' }}>
        Welcome to <span style={{ color: '#5865F2' }}>VideoDubberAI</span> Color Generator
      </Text>

      <Text size="lg" style={{ marginTop: '20px', marginBottom: '20px', fontStyle: 'italic' }}>
        "Unleash your creativity, one color at a time."
      </Text>

      <Text size="lg" style={{ marginTop: '20px', marginBottom: '30px' }}>
        Use this tool to bring your Discord messages to life by generating colorful, creative text that stands out in the crowd!
      </Text>

      <Stack style={{ marginTop: '30px', padding: '20px', backgroundColor: '#2F3136', borderRadius: '10px' }}>
        <Text size="lg" style={{ marginBottom: '20px' }}>Create your text</Text>
        <Group position="center" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="outline" onClick={() => textareaRef.current.innerHTML = ""} style={{ margin: '5px' }}>Reset All</Button>
          <Button onClick={() => applyColor('black')} style={{ backgroundColor: 'black', color: 'white', margin: '5px' }}>Black</Button>
          <Button onClick={() => applyColor('red')} style={{ backgroundColor: 'red', color: 'white', margin: '5px' }}>Red</Button>
          <Button onClick={() => applyColor('green')} style={{ backgroundColor: 'green', color: 'white', margin: '5px' }}>Green</Button>
          <Button onClick={() => applyColor('yellow')} style={{ backgroundColor: 'yellow', margin: '5px' }}>Yellow</Button>
          <Button onClick={() => applyColor('blue')} style={{ backgroundColor: 'blue', color: 'white', margin: '5px' }}>Blue</Button>
          <Button onClick={() => applyColor('purple')} style={{ backgroundColor: 'purple', color: 'white', margin: '5px' }}>Purple</Button>
          <Button onClick={() => applyColor('cyan')} style={{ backgroundColor: 'cyan', margin: '5px' }}>Cyan</Button>
          <Button onClick={() => applyColor('white')} style={{ backgroundColor: 'white', color: 'black', margin: '5px' }}>White</Button>
        </Group>
      </Stack>

      <div
        id="textarea"
        ref={textareaRef}
        contentEditable="true"
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#2F3136',
          color: '#B9BBBE',
          fontFamily: 'monospace',
          borderRadius: '5px',
          minHeight: '150px',
          whiteSpace: 'pre-wrap',
          overflow: 'auto',
          marginBottom: '20px',
        }}
        dangerouslySetInnerHTML={{ __html: "" }}
      />

      <Button onClick={handleCopy} style={{ marginTop: '20px', padding: '12px 20px', backgroundColor: '#5865F2', color: 'white', borderRadius: '5px', transition: 'background-color 0.3s' }}>
        Copy text as Discord formatted
      </Button>

      <Text size="sm" style={{ marginTop: '20px', marginBottom: '10px' }}>
        This is an unofficial tool, it is not made or endorsed by Discord.
      </Text>
    </Container>
  );
};

export default ColoredTextGenerator;
