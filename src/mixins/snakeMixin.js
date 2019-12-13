/* constants */
import { DEFAULT_SPEED, SPEED_GRADE_VALUE } from '@/constants';

/* utils */
import { getFieldByCoords } from '@/utils/game-dom';

/* eslint-disable consistent-return */
export default {
  data: () => ({
    changingDirectionALlowed: true,
    snake: {
      isRunning: false,
      speedGradeNumber: 1,
      speedGradeValue: SPEED_GRADE_VALUE,
      speed: DEFAULT_SPEED,
      direction: 'right',
      parts: [{ x: 5, y: 5 }]
    }
  }),

  watch: {
    /* A watcher is a feature that allows you to spy on Vue data property, 
    and execute needed action when that property value changes. 
    Make small input processing frequency, because in other case
    player can quickly press different arrow buttons and each of them
    will change the snake direction. The problem is conditions of
    changeSnakeDirection() function, that will correctly change the direction
    (from their point of view), but tick of startGameLoop() function is
    too rarely coming, so it will be process only the last imposed direction
    that can be opposite for last direction approved by startGameLoop() function */
    changingDirectionALlowed(val) {
      if (!val) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.changingDirectionALlowed = true;
          }, this.snake.speed);
        });
      }
    }
  },

  methods: {
    drawSnake() {
      /* drawing each part of snake */
      for (let i = 0; i < this.snake.parts.length; i += 1) {
        if (i > 0) {
          this.getSnakeBodyPart(i).classList.add('snakePart');
        } else {
          this.getSnakeBodyPart(i).classList.add('snakeHead');
        }
      }
      /* meat = the objective */
      if (this.isSnakeOnMeat()) {
        this.increasePlayerScore();
        this.removeMeatFromField();
        this.drawNewMeatField();
        this.addSnakeBodyPart();
      }

      if (this.isSnakeOnItself()) {
        this.stopTheGame();
      }
    },
    increasePlayerScore() {
      this.score.reached += this.score.cost;
    },
    isSnakeOnItself() {
      const snakeHead = this.getSnakeHeadField();

      return snakeHead.classList.value.includes('snakePart');
    },
    getSnakeBodyPart(n) {
      return getFieldByCoords(this.snake.parts[n].x, this.snake.parts[n].y);
    },
    getSnakeHeadField() {
      return getFieldByCoords(this.snake.parts[0].x, this.snake.parts[0].y);
    },
    playPauseGame() {
      this.snake.isRunning = !this.snake.isRunning;

      if (!this.snake.isRunning) {
        /* stopping the game loop */
        clearInterval(this.interval);
      }

      this.startGameLoop();
    },
    startGameLoop() {
      if (!this.snake.isRunning) return false;

      this.interval = setInterval(() => {
        this.moveSnake();
      }, this.snake.speed);
    },
    gradeSpeedIfBoundaryAchieved(reachedScore) {
      const { nextBreakpoint } = this.score;

      /* if reached score achieved the boundary of the next breakpoint */
      if (reachedScore >= this.score.breakpoints[nextBreakpoint].boundary) {
        /* if that breakpoint isn't passed yet */
        if (!this.score.breakpoints[nextBreakpoint].passed) {
          /* grade speed and turn breakpoint to passed */
          this.snake.speed -= this.snake.speedGradeValue;
          this.snake.speedGradeNumber += 1;
          this.score.breakpoints[nextBreakpoint].passed = true;

          /* if it's not last breakpoint */
          if (nextBreakpoint < this.score.breakpoints.length - 1) {
            this.score.nextBreakpoint += 1;
          }
        }
      }

      /* restarting game loop */
      clearInterval(this.interval);
      this.startGameLoop();
    },
    changeSnakeDirection(newDirection) {
      const currentDirection = this.snake.direction;

      if (!this.snake.isRunning || !this.changingDirectionALlowed) return false;
      if (currentDirection === newDirection) return false;

      if (
        (newDirection === 'up' && currentDirection === 'down') ||
        (newDirection === 'down' && currentDirection === 'up') ||
        (newDirection === 'left' && currentDirection === 'right') ||
        (newDirection === 'right' && currentDirection === 'left')
      ) {
        return false;
      }

      this.snake.direction = newDirection;
      this.changingDirectionALlowed = false;
    },
    getSnakeCoordsBeforeMoving() {
      const oldPartsCoords = [];

      this.snake.parts.forEach(part => {
        oldPartsCoords.push({
          x: part.x,
          y: part.y
        });
      });

      return oldPartsCoords;
    },
    moveSnake() {
      const oldPartsCoords = this.getSnakeCoordsBeforeMoving();

      for (let i = 0; i < this.snake.parts.length; i += 1) {
        /* if it's head, just increment/decrement X or Y depending on moving direction */
        if (i === 0) {
          const oldSnakeHead = this.getSnakeHeadField();

          oldSnakeHead.classList.remove('snakeHead');

          switch (this.snake.direction) {
            case 'up':
              if (this.snake.parts[0].y === 1) {
                this.snake.parts[0].y = this.area.size.y;
              } else {
                this.snake.parts[0].y -= 1;
              }
              break;

            case 'down':
              if (this.snake.parts[0].y === this.area.size.y) {
                this.snake.parts[0].y = 1;
              } else {
                this.snake.parts[0].y += 1;
              }
              break;

            case 'left':
              if (this.snake.parts[0].x === 1) {
                this.snake.parts[0].x = this.area.size.x;
              } else {
                this.snake.parts[0].x -= 1;
              }
              break;

            case 'right':
              if (this.snake.parts[0].x === this.area.size.x) {
                this.snake.parts[0].x = 1;
              } else {
                this.snake.parts[0].x += 1;
              }
              break;

            default:
              break;
          }
        } else {
          /*
            If it's a body part, put it on coords of the part that going ahead of it.
            Thus, each part of the body is constantly trying to catch up with
            the part that going ahead,
          */
          const oldPartPos = this.getSnakeBodyPart(i);

          oldPartPos.classList.remove('snakePart');

          this.snake.parts[i].x = oldPartsCoords[i - 1].x;
          this.snake.parts[i].y = oldPartsCoords[i - 1].y;
        }
      }

      this.drawSnake();
    },
    addSnakeBodyPart() {
      const tailIndex = this.snake.parts.length - 1;
      let { x, y } = this.snake.parts[tailIndex];
      /*
        determine the coordinates of the new part of the
        body depending on the direction of movement
      */
      switch (this.snake.direction) {
        case 'up':
          if (this.snake.parts[tailIndex].y === 1) {
            y = this.area.size.y;
          } else {
            y = this.snake.parts[tailIndex].y - 1;
          }
          break;

        case 'down':
          if (this.snake.parts[tailIndex].y === this.area.size.y) {
            y = 1;
          } else {
            y = this.snake.parts[tailIndex].y + 1;
          }
          break;

        case 'left':
          if (this.snake.parts[tailIndex].x === this.area.size.x) {
            x = 1;
          } else {
            x = this.snake.parts[tailIndex].x + 1;
          }
          break;

        case 'right':
          if (this.snake.parts[tailIndex].x === 1) {
            x = this.area.size.x;
          } else {
            x = this.snake.parts[tailIndex].x - 1;
          }
          break;

        default:
          break;
      }

      this.snake.parts.push({ x, y });
    }
  }
};
