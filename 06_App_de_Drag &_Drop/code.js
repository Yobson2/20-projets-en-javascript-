// Get all the operations and dropzones
const operations = document.querySelectorAll('.operation');
const dropzones = document.querySelectorAll('.dropzone');

// Add event listeners for drag and drop
operations.forEach(operation => {
  operation.addEventListener('dragstart', dragStart);
  operation.addEventListener('dragend', dragEnd);
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', drop);
});

// Drag and drop functions
function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('highlight');
  }
  
