import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class PongGame extends JPanel implements ActionListener {

    private final int BALL_SIZE = 20;
    private final int PADDLE_WIDTH = 10;
    private final int PADDLE_HEIGHT = 100;
    private final int FPS = 60;

    private int ballX = 250;
    private int ballY = 250;
    private int ballSpeedX = 2;
    private int ballSpeedY = 2;

    private int paddle1Y = 250;
    private int paddle2Y = 250;

    private boolean upPressed = false;
    private boolean downPressed = false;
    private boolean wPressed = false;
    private boolean sPressed = false;

    private Timer timer;

    public PongGame() {
        setBackground(Color.BLACK);
        setFocusable(true);
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int keyCode = e.getKeyCode();
                if (keyCode == KeyEvent.VK_UP) {
                    upPressed = true;
                }
                if (keyCode == KeyEvent.VK_DOWN) {
                    downPressed = true;
                }
                if (keyCode == KeyEvent.VK_W) {
                    wPressed = true;
                }
                if (keyCode == KeyEvent.VK_S) {
                    sPressed = true;
                }
            }

            @Override
            public void keyReleased(KeyEvent e) {
                int keyCode = e.getKeyCode();
                if (keyCode == KeyEvent.VK_UP) {
                    upPressed = false;
                }
                if (keyCode == KeyEvent.VK_DOWN) {
                    downPressed = false;
                }
                if (keyCode == KeyEvent.VK_W) {
                    wPressed = false;
                }
                if (keyCode == KeyEvent.VK_S) {
                    sPressed = false;
                }
            }
        });

        timer = new Timer(1000 / FPS, this);
        timer.start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.WHITE);

        // Draw the ball
        g.fillOval(ballX, ballY, BALL_SIZE, BALL_SIZE);

        // Draw the paddles
        g.fillRect(10, paddle1Y, PADDLE_WIDTH, PADDLE_HEIGHT);
        g.fillRect(580, paddle2Y, PADDLE_WIDTH, PADDLE_HEIGHT);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Move the paddles
        if (upPressed) {
            paddle1Y -= 5;
        }
        if (downPressed) {
            paddle1Y += 5;
        }
        if (wPressed) {
            paddle2Y -= 5;
        }
        if (sPressed) {
            paddle2Y += 5;
        }

        // Move the ball
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Bounce the ball off the walls
        if (ballY < 0 || ballY > 500) {
            ballSpeedY = -ballSpeedY;
        }

        // Bounce the ball off the paddles
        if ((ballX < 20 && ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) ||
                (ballX > 580 && ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT)) {
            ballSpeedX = -ballSpeedX;
        }

        // Reset the ball if it goes out of bounds
        if (ballX < 0 || ballX > 600) {
            ballX = 250;
            ballY = 250;
            ballSpeedX = 2;
            ballSpeedY = 2;
        }

        repaint();
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Pong Game");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new PongGame());
        frame.setSize(600, 500);
        frame.setVisible(true);
    }
}