import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TicTacToe extends JFrame implements ActionListener {

    private JButton[][] buttons;
    private JLabel turnLabel;
    private boolean xTurn = true;

    public TicTacToe() {
        super("Tic Tac Toe");
        setSize(300, 350);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        JPanel boardPanel = new JPanel(new GridLayout(3, 3));
        buttons = new JButton[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                buttons[i][j] = new JButton();
                buttons[i][j].addActionListener(this);
                boardPanel.add(buttons[i][j]);
            }
        }

        turnLabel = new JLabel("X's turn");
        JPanel turnPanel = new JPanel(new FlowLayout());
        turnPanel.add(turnLabel);

        add(boardPanel, BorderLayout.CENTER);
        add(turnPanel, BorderLayout.NORTH);

        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (e.getSource() == buttons[i][j]) {
                    if (xTurn) {
                        buttons[i][j].setText("X");
                    } else {
                        buttons[i][j].setText("O");
                    }
                    buttons[i][j].setEnabled(false);
                    xTurn = !xTurn;
                    if (xTurn) {
                        turnLabel.setText("X's turn");
                    } else {
                        turnLabel.setText("O's turn");
                    }
                    if (checkForWinner()) {
                        if (xTurn) {
                            JOptionPane.showMessageDialog(this, "O wins!");
                        } else {
                            JOptionPane.showMessageDialog(this, "X wins!");
                        }
                        resetGame();
                    }
                }
            }
        }
    }

    private boolean checkForWinner() {
        for (int i = 0; i < 3; i++) {
            if (checkRow(i) || checkColumn(i) || checkDiagonal1() || checkDiagonal2()) {
                return true;
            }
        }
        return false;
    }

    private boolean checkRow(int row) {
        return buttons[row][0].getText().equals(buttons[row][1].getText()) &&
               buttons[row][1].getText().equals(buttons[row][2].getText()) &&
               !buttons[row][0].getText().isEmpty();
    }

    private boolean checkColumn(int column) {
        return buttons[0][column].getText().equals(buttons[1][column].getText()) &&
               buttons[1][column].getText().equals(buttons[2][column].getText()) &&
               !buttons[0][column].getText().isEmpty();
    }

    private boolean checkDiagonal1() {
        return buttons[0][0].getText().equals(buttons[1][1].getText()) &&
               buttons[1][1].getText().equals(buttons[2][2].getText()) &&
               !buttons[0][0].getText().isEmpty();
    }

    private boolean checkDiagonal2() {
        return buttons[0][2].getText().equals(buttons[1][1].getText()) &&
               buttons[1][1].getText().equals(buttons[2][0].getText()) &&
               !buttons[0][2].getText().isEmpty();
    }

    private void resetGame() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                buttons[i][j].setText("");
                buttons[i][j].setEnabled(true);
            }
        }
        xTurn = true;
        turnLabel.setText("X's turn");
    }

    public static void main(String[] args) {
        new TicTacToe();
    }
}